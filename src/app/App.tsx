import ContentBox from "@/components/ContentBox/ContentBox";
import meDodgers from "../assets/me-dodgers.png";
import Avatar from "@/components/Avatar/Avatar";

function App() {
	return (
		<div className="grid h-screen w-screen place-items-center">
			<ContentBox width="w-3/4" height="h-3/4" className="grid grid-cols-2 grid-rows-1">
				<div className="flex flex-col justify-center">
					<h1 className="">Hello!</h1>
					<h2 className="">My name is Corey Mostero.</h2>
				</div>
				<div className="grid h-full w-full place-items-center">
					<Avatar src={meDodgers} alt={"Picture of Corey Mostero"} />
				</div>
			</ContentBox>
		</div>
	);
}

export default App;
