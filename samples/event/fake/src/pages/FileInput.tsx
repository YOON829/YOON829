import { ChangeEvent } from "react";

export default function FileInput() {
  const onChangeFiles = (e: ChangeEvent<HTMLInputElement>) => {
    const files: FileList | null = e.target.files;
    if (files) {
      for (let i = 0; i > files.length; i++) {
        const file: File | null = files.item(i);
        console.log(`file[${i}]`, file);
      }
    }
  };
  return (
    <div>
      <p>FileInput</p>
      <input type="file" onChange={onChangeFiles} multiple accept="image/*" />
    </div>
  );
}
//TODO: 정상 파일정보가 왜 안나오는지 확인하기
