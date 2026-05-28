"use client";
import { ReactNode, useRef } from "react";
import CopyButton from "@/components/ui/copy-button";

type Props = {
  children: ReactNode;
  tag: "code";
};

const CopyWrapper = ({ children, tag: Tag }: Props) => {
  const elementRef = useRef(null)
  return (
    <div className={"relative h-full"}>
      <div className="overflow-auto h-full">
        <Tag ref={elementRef}>{children}</Tag>
      </div>
      <CopyButton
        className={"absolute top-1 right-1 text-black z-50"}
        ref={elementRef}
      />
    </div>
  );
};
export default CopyWrapper;
