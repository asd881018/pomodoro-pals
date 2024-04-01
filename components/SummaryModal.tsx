'use client'

import React, { useContext } from 'react';

import { StyleContext } from "../contexts/StyleContext";
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

import closeIcon from '../public/assets/icon-close.svg';

interface ModalProps {
	onClose: () => void
}

/**
 * Make it save text to history data
 * Cancel does not save response
 */

function Modal({ onClose }: ModalProps) {
	const { color } = useContext(StyleContext);

	const activeColor: string = 'bg-' + color;

	const groupVariants: Variants = {
		initial: { opacity: 0, y: -10 },
		animate: {
			opacity: 1,
			y: 0,
			transition: {
				ease: 'easeIn',
				staggerChildren: 0.3,
				delayChildren: 0.2,
			},
		},
	};

	const childrenVariants: Variants = {
		initial: { opacity: 0, y: -10 },
		animate: { opacity: 1, y: 0 },
	};


	return (
		<div className="fixed inset-0 bg-primary-dark/70 overflow-y-auto h-full w-full flex items-center justify-center">
			<motion.div
				initial='initial'
				animate='animate'
				variants={groupVariants}
				className='fixed inset-0 flex items-center justify-center p-4'
			>
				<div className="relative mx-auto w-[88vw] max-w-lg rounded-3xl bg-white pb-8 shadow-lg">
					<motion.div
						variants={childrenVariants}
						className='flex items-center justify-between p-6'
					>
						<h2 className="text-h2 text-primary-dark-900">Session Comments</h2>
						<button
							type='button'
							onClick={onClose}
							className='focus:p-1 focus:outline-dashed focus:outline-primary-dark'
						>
							<Image src={closeIcon} alt='close' />
						</button>
					</motion.div>
					<div className='h-0.5 w-full bg-secondary-dark' />

					<motion.div variants={childrenVariants} className='p-6'>
						<textarea className="w-full h-40 min-h-24 max-h-[75vh] relative appearance-none rounded-lg bg-secondary-dark p-2 focus:outline-dashed focus:outline-primary-dark" placeholder="Data Here :)" />
					</motion.div>

					<div className="absolute -bottom-6 left-1/2 -translate-x-1/2 space-x-4 flex justify-center mt-4">
						<button
							onClick={onClose}
							className={`rounded-full ${activeColor} p-4 px-12 text-secondary transition-all duration-300 hover:scale-90 focus:rounded-full focus:outline-dashed focus:outline-primary`}
						>
							Save
						</button>
					</div>
				</div>
			</motion.div>
		</div>
	);
}

export default Modal;