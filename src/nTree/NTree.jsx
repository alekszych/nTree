import React, {useEffect, useRef} from "react"
import {array, number} from "prop-types"
import {Group} from "three"
import {MeshSurfaceSampler} from "three/examples/jsm/math/MeshSurfaceSampler"

import {generateIsland} from "./island/generateIsland"
import {generateScene} from "./scene/generateScene"
import {displayRocks} from "./rock/displayRocks"
import {displayTrees} from "./tree/displayTrees"

const NTree = ({dnaArray = [], rockAmount = 3, islandSize = 5}) => {
	const container = useRef(null)

	useEffect(() => {
		const group = new Group()

		const islandMesh = generateIsland(islandSize)
		group.add(islandMesh)

		const sampler = new MeshSurfaceSampler(islandMesh).build()
		const meshPositions = []

		displayTrees(sampler, meshPositions, group, islandSize, dnaArray)
		displayRocks(sampler, meshPositions, group, islandSize, rockAmount)

		generateScene(container, group)
	}, [])

	return (
		<div ref={container}/>
	)
}

NTree.propTypes = {dnaArray: array, rockAmount: number, islandSize: number}
export {NTree}
