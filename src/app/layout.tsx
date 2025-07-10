import type { Metadata } from "next";
import { Provider } from "@/components/ui/provider"; // your Chakra provider
import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
  title: "Rachmiel Teo • Portfolio",
  description: "Projects, research and musings",
};

import { Toaster } from "@/components/ui/toaster"
import Footer from "@/components/Footer";

export default function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props
  return (
    <html>
      <body>
        <Provider>
            <Toaster/>
            <NavBar/>
            {children}
            <Footer />
        </Provider>
      </body>
    </html>
  )
}