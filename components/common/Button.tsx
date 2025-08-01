import React from 'react'
import { ButtonProps } from '../../interfaces'

export const Button: React.FC<ButtonProps> = ({ label, onClick }) => (
	<button
		onClick={onClick}
		className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
	>
		{label}
	</button>
)
