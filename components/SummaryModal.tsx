'use client'

import React, { useContext } from 'react';

import { StyleContext } from "../contexts/StyleContext";

interface ModalProps {
	onClose: () => void
}

/**
 * Make it save text to history data
 * Cancel does not save response
 */

function Modal({ onClose }: ModalProps) {
	const { color } = useContext(StyleContext);

	const activeColor: string =
		color === 'red' ? 'bg-red' : color === 'cyan' ? 'bg-cyan' : 'bg-violet';

	return (
		<div className="fixed inset-0 bg-primary-dark bg-opacity-70 overflow-y-auto h-full w-full flex items-center justify-center">
			<div className="relative p-8 border w-96 shadow-lg rounded-md bg-white">
				<div className="text-center">
					<h3 className="text-2xl font-bold text-primary-dark-900">Session Comments</h3>
					<div className="mt-2 py-3">
						<textarea className="w-full h-40 relative appearance-none rounded-lg bg-secondary-dark p-2 focus:outline-dashed focus:outline-primary-dark" placeholder="Data Here :)" />
					</div>
					<div className="absolute -bottom-6 left-1/2 -translate-x-1/2 space-x-4 flex justify-center mt-4">
						<button
							onClick={onClose}
							className={`rounded-full ${activeColor} p-4 px-12 text-secondary transition-all duration-300 hover:scale-90 focus:rounded-full focus:outline-dashed focus:outline-primary`}
						>
							Save
						</button>

						<button
							onClick={onClose}
							className={`rounded-full ${activeColor} p-4 px-12 text-secondary transition-all duration-300 hover:scale-90 focus:rounded-full focus:outline-dashed focus:outline-primary`}
						>
							Cancel
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Modal;