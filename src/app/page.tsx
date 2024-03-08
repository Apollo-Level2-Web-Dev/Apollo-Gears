import Button from "../components/Button";

export default function Home(props) {
  console.log(props);
  return (
    <>
      <div className="border border-red-600 w-56">
        <div className="border border-blue-500">
          <h1>Mercedes Bend</h1>
          <p>Model : 2015</p>

          <h1>Server Component</h1>
        </div>
        <Button />
      </div>
    </>
  );
}

/**
 * 1. JSON Send
 * 2. HTML Send [No Interactivity] [No OnClick, No Hover, No Animation]
 */
