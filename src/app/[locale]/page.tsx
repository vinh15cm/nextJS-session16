"use client";
import { useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function HomePage() {
  const t = useTranslations("HomePage");
  const router = useRouter();
  const [language, setLanguage] = useState("en");

  const handleOnChange = (e: any) => {
    const selectedLanguage = e.target.value;
    setLanguage(selectedLanguage);
    router.push(`/${selectedLanguage}`);
  };

  return (
    <>
      <select onChange={handleOnChange} value={language}>
        <option value="en">English</option>
        <option value="vi">Việt Nam</option>
      </select>
      <h1>{t("title")}</h1>
      <h1>{t("description")}</h1>
    </>
  );
}
