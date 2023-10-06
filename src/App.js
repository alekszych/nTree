import React, {useEffect, useState} from "react"
import {NTree} from "./nTree/NTree"
import {generateDna} from "./helpers/generators"

const App = () => {
	const [dna, setDna] = useState(undefined)
	useEffect(() => {
		setDna(generateDna())
		addEventListener("resize", () => {
			location.reload()
		})
	}, [])
	if(!dna){
		return (
			<>
				<img src={"background.png"} className={"background"} alt={"background"}/>
				<h1> Loading tree </h1>
			</>
		)
	}
	return (
		<>
			<img src={"background.png"} className={"background"} alt={"background"}/>
			<NTree
				dnaArray={[dna]}
				rockAmount={2}
				islandSize={4}
			/>
			<button onClick={() => location.reload()}> Regenerate your Ntree </button>
		</>
	)
}

export default App