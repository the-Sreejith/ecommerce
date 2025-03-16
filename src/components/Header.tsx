"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/lib/contexts/CartContext";
import { ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSession, signIn, signOut } from "next-auth/react";

export function Header() {
  const pathname = usePathname();
  const { itemCount } = useCart();
  const { data: session } = useSession();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <header className="border-b">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="text-xl font-bold">
          Ecommerce
        </Link>

        <nav className="flex items-center gap-4">
          <Link 
            href="/" 
            className={`${isActive('/') ? 'font-semibold' : ''} hover:text-slate-800`}
          >
            Home
          </Link>
          
          {session?.user?.role === "ADMIN" && (
            <Link 
              href="/admin" 
              className={`${isActive('/admin') ? 'font-semibold' : ''} hover:text-slate-800`}
            >
              Admin
            </Link>
          )}

          <Link href="/cart" className="relative">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
              {itemCount > 0 && (
                <span className="absolute right-0 top-0 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white">
                  {itemCount}
                </span>
              )}
            </Button>
          </Link>

          {session ? (
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
              <Button variant="ghost" onClick={() => signOut()}>
                Sign Out
              </Button>
            </div>
          ) : (
            <Button variant="ghost" onClick={() => signIn()}>
              Sign In
            </Button>
          )}
        </nav>
      </div>
    </header>
  );
} 