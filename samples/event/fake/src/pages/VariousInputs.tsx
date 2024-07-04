export default function VariousInputs() {
  return (
    <div>
      <p>VariousInputs</p>
      <div>
        <input type="text" placeholder="enter some texts" />
        <input type="password" placeholder="enter some password" />
        <input type="email" placeholder="enter email address" />
        <input type="range" />
        <input type="button" value="I'm a Button" />
        <input type="checkbox" value="I'm a CheckBox" defaultChecked />
        <input type="radio" value="I'm a radio" defaultChecked />
        <input type="file" />
      </div>
    </div>
  );
}
