import { Fragment, ReactNode } from "react";
import Navbar from "./(home)/components/Navbar";

export default function SubRootLayout({ children }: { children: ReactNode }) {
  return (
    <Fragment>
      <Navbar />
      {children}
    </Fragment>
  );
}
