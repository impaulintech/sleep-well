import Head from "next/head";
import React, { FC, ReactNode } from "react";

import LogoIcon from "~/shared/icons/LogoIcon";

type Props = {
  title: string;
  key?: string | undefined;
  children?: ReactNode;
} & typeof defaultProps;

const defaultProps = {
  title: "",
  key: "",
};

const NextHead: FC<Props> = (props): JSX.Element => {
  const { title, key, children } = props;

  return (
    <>
      <LogoIcon className="mt-5" />
      <Head>
        <title key={`${key}`}>{`${title}`}</title>
        {children}
      </Head>
    </>
  );
};

export default NextHead;
