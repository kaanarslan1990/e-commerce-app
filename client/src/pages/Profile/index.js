import { Button, Text } from "@chakra-ui/react";
import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import {useNavigate} from 'react-router-dom';

function Profile() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    logout(() => {  
      navigate('/')
    });
  };
  return (
    <div>
      <Text fontSize="24" as="b" color="purple">
        Profile
      </Text>
      <br />
      <br />
      <code>{JSON.stringify(user)}</code>
      <br />
      <br />
      <br />
      <br />
      <Button colorScheme="purple" variant="solid" onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
}

export default Profile;
