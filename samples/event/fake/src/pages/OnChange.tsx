import { ChangeEvent } from "react";

export default function OnChange() {
  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    e.preventDefault();
    console.log("onChangeValue", e.target.value);
  };
  const onChangeChecked = (e: ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    console.log("onChangeChecked", e.target.value);
  };

  const onChangeFiles = (e: ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    console.log("onChangeFiles", e.target.value);
  };
  return (
    <div>
      <p>OnChange</p>
      <input
        type="text"
        onChange={onChangeValue}
        placeholder="enter some texts"
        defaultValue={"hello"}
      />
      <input
        type="checkbox"
        onChange={onChangeChecked}
        placeholder="enter some checkbox"
        defaultChecked
      />
      <input type="file" onChange={onChangeFiles} multiple accept="images/*" />
    {/*    <input type="file" multiple>은 여러개의 파일을 가져올수있음 / multiple 을 지우면 파일은 단일 파일만됨 */}
    </div>
  );
}
