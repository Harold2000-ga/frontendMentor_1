import illustratorDesktop from './assets/images/illustration-sign-up-desktop.svg';
import iconList from './assets/images/icon-list.svg';
import iconSuccess from './assets/images/icon-success.svg';
import { useState } from 'react';

function App() {
	const [emailResult, setEmailResult] = useState({
		valid: true,
		email: '',
		message: '',
	});
	const [success, setSuccess] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		const email = e.target.email.value.trim();

		if (email === '') {
			setEmailResult((prevState) => ({
				...prevState,
				valid: false,
				message: 'Enter your email address.',
			}));
			return;
		}

		// Check if the email is valid
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			setEmailResult((prevState) => ({
				...prevState,
				valid: false,
				message: 'Enter a valid email address.',
			}));
			return;
		}

		// If validation passes, set success state and clear emailResult
		setSuccess(true);
		setEmailResult({
			valid: true,
			email: email,
			message: '',
		});
	};

	return (
		<div className="h-screen bg-greyslate flex">
			{success ? (
				<div className="bg-white md:rounded-3xl md:w-2/4 md:h-auto   mx-auto my-auto w-full h-full lg:w-1/4 py-8 px-8 flex flex-col">
					<img src={iconSuccess} alt="SVG Picture" className="w-12 h-12 mt-40 md:mt-5" />
					<h1 className="text-4xl font-roboto font-bold my-4">Thanks for subscribing!</h1>
					<p className="font-roboto my-5">
						A confirmation email has been sent to <span className="font-bold">{emailResult.email}</span>.Please open and click the button to confirm
						the subscription
					</p>
					<button
						onClick={() => {
							setSuccess(false);
						}}
						className="mt-auto block w-full border-2 rounded-lg px-4 py-3 font-roboto cursor-pointer hover:bg-primary bg-charcoalgrey text-gray-100 p"
						type="submit"
					>
						Dismiss message
					</button>
				</div>
			) : (
				<>
					{/* Main */}
					<main className="bg-white md:rounded-3xl md:h-auto mx-auto my-auto w-full h-full md:w-2/3 flex flex-col-reverse md:flex-row gap-4 justify-between">
						{/* Left Column */}
						<div className="mx-auto my-10 px-6 tracking-widest">
							<h1 className="text-5xl font-roboto font-bold my-4">Stay updated!</h1>
							<p className="text-lg font-roboto  mt-5">Join 60 000+ products managers receiving monthly updates on:</p>
							<ul className="my-5">
								<li className="flex gap-4 my-3 text-lg font-roboto">
									<img src={iconList} alt="SVG Picture" />
									<p>Product discovery and building what matters</p>
								</li>
								<li className="flex gap-4 my-3 text-lg font-roboto">
									<img src={iconList} alt="SVG Picture" />
									<p>Measure to ensure updates are success</p>
								</li>
								<li className="flex gap-4 my-3 text-lg font-roboto">
									<img src={iconList} alt="SVG Picture" />
									<p>And much more</p>
								</li>
							</ul>

							<form className="md:w-4/5 w-full" onSubmit={(e) => handleSubmit(e)}>
								<div className="flex justify-between">
									<label className="block font-roboto font-bold text-sm">Email address</label>
									{!emailResult.valid && <p className="text-sm text-primary">{emailResult.message}</p>}
								</div>
								<input
									className={`${!emailResult.valid ? ' bg-opacity-40 bg-primary text-primary ' : ''} mt-2 mb-4 border-2 w-full rounded-lg px-4 py-3`}
									type="text"
									name="email"
									placeholder="email@gmail.com"
								/>
								<input
									className="block w-full border-2 rounded-lg px-4 py-3 font-roboto cursor-pointer hover:bg-primary bg-charcoalgrey text-gray-100"
									value="Subscribe to monthly newsletter"
									type="submit"
								/>
							</form>
						</div>
						{/* Right Column */}
						<div>
							<img src={illustratorDesktop} alt="SVG Picture" className="w-full h-full md:object-contain" />
						</div>
					</main>
				</>
			)}
		</div>
	);
}

export default App;
