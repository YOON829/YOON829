const rootDiv = document.getElementById("root");
if (rootDiv) {
  rootDiv.onclick = (e: Event) => {
    const { isTrusted, target, bubbles } = e;
    console.log("mouse click occurs on roodDiv", isTrusted, target, bubbles);
  };
}

rootDiv.onclick = (e: Event) => {
  const { isTrusted, target, bubbles } = e;
  console.log("mouse click occurs also on roodDiv", isTrusted, target, bubbles);
};

export default function OnClick() {
  return <>OnClick</>;
}
