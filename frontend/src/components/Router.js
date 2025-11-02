import { MemberProvider } from '@/integrations';
import { createBrowserRouter, RouterProvider, Navigate, Outlet } from 'react-router-dom';
import HomePage from '@/components/pages/HomePage.tsx';
import CaseStudiesPage from '@/components/pages/CaseStudiesPage.tsx';
import FAQPage from '@/components/pages/FAQPage.tsx';
import ContactPage from '@/components/pages/ContactPage.tsx';

// Simple scroll to top component
const ScrollToTop = () => {
  return null;
};

// Layout component
function Layout() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "case-studies",
        element: <CaseStudiesPage />,
      },
      {
        path: "faq",
        element: <FAQPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
]);

export default function AppRouter() {
  return (
    <MemberProvider>
      <RouterProvider router={router} />
    </MemberProvider>
  );
}
