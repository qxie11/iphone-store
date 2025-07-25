'use client';

import { ShoppingCart } from 'lucide-react';

import React, { HTMLAttributes } from 'react';

import { addToCart } from '@/entities/cart/model/slice';
import type { Smartphone } from '@/entities/product/model/types';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Button, ButtonSize, ButtonVariant } from '@/shared/ui/button';

interface AddToCartButtonProps extends HTMLAttributes<HTMLButtonElement> {
  product: Smartphone;
  className?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
  children?: React.ReactNode;
}

export const AddToCartButton = ({
  product,
  className,
  size = 'medium',
  children,
  ...rest
}: AddToCartButtonProps) => {
  const dispatch = useAppDispatch();

  const handleAddToCart = (e?: React.MouseEvent<HTMLButtonElement>) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    dispatch(addToCart(product));
  };

  return (
    <Button size={size} className={className} onClick={handleAddToCart} {...rest}>
      {children || <ShoppingCart size={17} />}
    </Button>
  );
};
