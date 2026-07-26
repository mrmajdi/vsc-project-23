import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, variant = 'primary', disabled = false }) => {
  const getButtonStyle = (variant: 'primary' | 'secondary', disabled: boolean) => {
    const base: React.CSSProperties = {
      fontFamily: 'inherit',
      fontSize: '1rem',
      padding: '0.5rem 1rem',
      border: 'none',
      borderRadius: '0.25rem',
      cursor: 'pointer',
      transition: 'background-color 0.2s ease, opacity 0.2s ease',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'inherit',
      direction: 'rtl',
    };

    const variantStyle: React.CSSProperties =
      variant === 'primary'
        ? { backgroundColor: '#0066cc', color: '#fff' }
        : { backgroundColor: '#f0f0f0', color: '#333' };

    const disabledStyle: React.CSSProperties = disabled
      ? { opacity: 0.6, cursor: 'not-allowed' as const }
      : {};

    return { ...base, ...variantStyle, ...disabledStyle };
  };

  const style = getButtonStyle(variant, disabled);

  return (
    <button type="button" onClick={onClick} disabled={disabled} style={style}>
      {label}
    </button>
  );
};

export default Button;