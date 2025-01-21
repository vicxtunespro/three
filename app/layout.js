// app/layout.js
import RootLayout from './RootLayout.server'; // Import the server layout
import ClientLayout from './RootLayout.client'; // Import the client layout

export default function Layout({ children }) {
  return (
    <RootLayout>
      <ClientLayout>{children}</ClientLayout>
    </RootLayout>
  );
}