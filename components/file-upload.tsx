"use client";

import { UploadDropzone } from "@/lib/upload-thing";

type props = {
  endpoint: "serverImage" | "messageFiles";
  value: string;
  onChange: (url?: string) => void;
};
const FileUpload = (p: props) => {
  const { endpoint, value, onChange } = p;

  return (
    <>
      <UploadDropzone endpoint={endpoint} />
    </>
  );
};

export default FileUpload;
