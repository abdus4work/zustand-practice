'use client'
import { Button } from "@/components/ui/button";
import { ReactNode, RefObject, useState } from "react";

type Props = {
  ref: RefObject<HTMLElement|null>
  className?:string
}

const CopyButton = ({ref,className}:Props) => {
  const [isCopied, setIsCopied] = useState(false);
  const copyToClipboard = () => {
    if(ref.current){
      const text = ref.current.innerText || ref.current.textContent || '';
      navigator.clipboard.writeText(text).then(()=>setIsCopied(true)).catch((e)=>console.log(e))
    }
  }
  return (
    <Button className={className} variant={'outline'} onClick={copyToClipboard}>
      {isCopied ? 'Copied' : 'Copy'}
    </Button>
  );
};
export default CopyButton;
