import { useEffect } from 'react';

const Admin = () => {
  useEffect(() => {
    // Redirect to /admin/ (with trailing slash) to load the CMS
    if (window.location.pathname === '/admin') {
      window.location.href = '/admin/';
    }
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Loading Content Manager...</h1>
        <p className="text-muted-foreground">Redirecting to CMS interface</p>
      </div>
    </div>
  );
};

export default Admin;
