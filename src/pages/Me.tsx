import React, { useEffect, useState } from "react";
import { me } from "../services/auth";

export default function Me() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    me()
      .then((data) => setUser(data))
      .catch(() => setUser(null));
  }, []);

  if (!user) return <p className="p-4">Kullanıcı bilgisi yüklenemedi.</p>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Profil</h2>
      <p><b>Email:</b> {user.email}</p>
      <p><b>Kullanıcı Adı:</b> {user.username}</p>
      <p><b>Rol:</b> {user.role}</p>
    </div>
  );
}
