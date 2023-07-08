import { Paper } from '@mantine/core';

function BreadcrumbsComponent() {
  return (
    <Paper p="xs" style={{ backgroundColor: '#F2F3F5' }}>
      <div style={{ fontSize: '12px' }}>
        <a href="/" style={{ color: '#797b7e' }}>
          Home
        </a>
        <span style={{ color: '#797b7e', margin: '0 0.5rem' }}>/</span>
        <span>Your Shopping Cart</span>
      </div>
    </Paper>
  );
}

export default BreadcrumbsComponent;
