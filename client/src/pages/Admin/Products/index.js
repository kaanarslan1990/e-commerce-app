import { Link } from "react-router-dom";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { deleteProduct, fetchProductList } from "../../../api";
import { Popconfirm, Table } from "antd";
import { Button, Flex, Text } from "@chakra-ui/react";

import { useMemo } from "react";

function Products() {
  const queryClient = useQueryClient();
  const { isLoading, isError, data, error } = useQuery(
    "admin:products",
    fetchProductList
  );

  const deleteMutation = useMutation(deleteProduct, {
    onSuccess: () => {
      queryClient.invalidateQueries("admin:products");
    },
  });
  const columns = useMemo(() => {
    return [
      {
        title: "Tittle",
        dataIndex: "title",
        key: "title",
      },
      {
        title: "Price",
        dataIndex: "price",
        key: "price",
      },
      {
        title: "Created At",
        dataIndex: "createdAt",
        key: "createdAt",
      },
      {
        title: "Action",
        key: "action",
        render: (text, record) => (
          <>
            <Link
              to={`/admin/products/${record._id}`}
              style={{ backgroundColor: "cyan", padding: 3, borderRadius: 5 }}
            >
              Edit
            </Link>
            <Popconfirm
              title="Are you sure?"
              onConfirm={() => {
                deleteMutation.mutate(record._id, {
                  onSuccess: () => {
                    console.log("success")
                  }
                });
              }}
              onCancel={() => console.log("Canceled!")}
              okText="Yes"
              cancelText="No"
              placement="left"
            >
              <a
                href="/#"
                style={{
                  padding: 3,
                  marginLeft: 10,
                  backgroundColor: "red",
                  color: "white",
                  borderRadius: 5,
                }}
              >
                Delete
              </a>
            </Popconfirm>
          </>
        ),
      },
    ];
  }, [deleteMutation]);

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error {error.message}</div>;
  }

  return (
    <div>
      <Flex justifyContent="space-between" alignItems="center">
        <Text fontSize="2xl" p="5">
          Products
        </Text>
        <Link to="/admin/products/new">
          <Button colorScheme="purple">New</Button>
        </Link>
      </Flex>
      <Table dataSource={data} columns={columns} rowKey="_id" />;
    </div>
  );
}

export default Products;
