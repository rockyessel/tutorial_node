import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  React.useEffect(() => {
    if (!user) return navigate('/login');
  }, [user, navigate]);
  return <div>Dashboard</div>;
};

export default Dashboard;
