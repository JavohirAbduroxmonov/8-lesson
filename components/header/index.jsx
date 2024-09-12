import Link from 'next/link'
import React from 'react'

const index = () => {
  const nav = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Users",
      href: "/user",
    },
  ];
  return (
    <header className="bg-blue-100">
      <nav className="h-[70px] flex items center px-20">
        <div className="flex gap-10 items-center">
          {nav?.map((item, index) => (
            <Link index={index} href={item.href}>{item.title}</Link>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default index