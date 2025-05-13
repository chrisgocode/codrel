"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function BookAnimation() {
  const [isHovering, setIsHovering] = useState(false);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isHovering) {
      interval = setInterval(() => {
        setRotation((prev) => (prev + 1) % 10);
      }, 50);
    } else {
      setRotation(0);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isHovering]);

  return (
    <div
      className="relative w-full max-w-[500px] aspect-square"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div
        className="absolute inset-0 flex items-center justify-center transition-transform duration-300"
        style={{
          transform: `rotate(${rotation - 5}deg) translateY(${
            isHovering ? -10 : 0
          }px)`,
        }}
      >
        <Image
          src="https://cjkvbneqnwfstfyyjwmx.supabase.co/storage/v1/object/sign/book-covers/214933.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2NlOWYwNWU2LWUxM2QtNDNmYy05YWU2LTE4NTYyMTUyNDhkMyJ9.eyJ1cmwiOiJib29rLWNvdmVycy8yMTQ5MzMuanBnIiwiaWF0IjoxNzQ3MTUwMjIwLCJleHAiOjE3Nzg2ODYyMjB9.-QtoJfD2G8uHvsROWQNm82p38Df72KfjlcdlEMsdJZc"
          width={300}
          height={400}
          alt="Book cover"
          className="rounded-md shadow-lg"
        />
      </div>

      <div
        className="absolute inset-0 flex items-center justify-center transition-transform duration-300"
        style={{
          transform: `rotate(${-rotation + 5}deg) translate(40px, ${
            isHovering ? 10 : 20
          }px)`,
        }}
      >
        <Image
          src="https://cjkvbneqnwfstfyyjwmx.supabase.co/storage/v1/object/sign/book-covers/61rZCYUYXuL.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2NlOWYwNWU2LWUxM2QtNDNmYy05YWU2LTE4NTYyMTUyNDhkMyJ9.eyJ1cmwiOiJib29rLWNvdmVycy82MXJaQ1lVWVh1TC5qcGciLCJpYXQiOjE3NDcxNTAyODYsImV4cCI6MTc3ODY4NjI4Nn0.bRfMiWZsJE67SQmEAD_EHoc8UcI4Ooji9tBn4XyoGPk"
          width={300}
          height={400}
          alt="Book cover"
          className="rounded-md shadow-lg"
        />
      </div>

      <div
        className="absolute inset-0 flex items-center justify-center transition-transform duration-300"
        style={{
          transform: `rotate(${rotation}deg) translate(-40px, ${
            isHovering ? 15 : 30
          }px)`,
        }}
      >
        <Image
          src="https://cjkvbneqnwfstfyyjwmx.supabase.co/storage/v1/object/sign/book-covers/gatsby-original2.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InN0b3JhZ2UtdXJsLXNpZ25pbmcta2V5X2NlOWYwNWU2LWUxM2QtNDNmYy05YWU2LTE4NTYyMTUyNDhkMyJ9.eyJ1cmwiOiJib29rLWNvdmVycy9nYXRzYnktb3JpZ2luYWwyLmpwZyIsImlhdCI6MTc0NzE1MDI5OSwiZXhwIjoxNzc4Njg2Mjk5fQ.xVYVvyvlME9nN50cunjA2pCgBMvhn82ocQXJmNVoj-k"
          width={300}
          height={400}
          alt="Book cover"
          className="rounded-md shadow-lg"
        />
      </div>
    </div>
  );
}
