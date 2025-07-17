"use client";
import {
  Bus,
  Fuel,
  Gift,
  Globe,
  GraduationCap,
  Landmark,
  MailIcon,
  Sparkle,
  UtensilsIcon,
  Wand,
} from "lucide-react";
import { Separator } from "../ui/separator";
import { CustomIcon } from "../ui/customIconWhats";
import { InstagramIcon } from "../ui/instagramIcon";
import { DynamicButtons } from "../DynamicButtons";
import { Alert, AlertTitle } from "../ui/alert";
import {
  Briefcase,
  Dumbbell,
  School,
  Building2,
  HardHat,
  Utensils,
} from "lucide-react";

type phoneType = {
  phoneOne: number;
  phoneTwo: number;
};

export const Main = () => {
  const name: string = "Fhase2 Uniformes";
  const description: string = "Fardamentos em geral";
  const phone: phoneType[] = [{ phoneOne: 86998271900, phoneTwo: 86998012172 }];
  const instagram: string = "fhase2.uniformes";
  const email: string = "fhase2@hotmail.com";
  const message: string = `Olá! Gostaria de realizar um orçamento.`;
  const encodedMessage = encodeURIComponent(message);
  const pageSite: string | null = null;

  const buttons = [
    {
      id: "site",
      show: !!pageSite,
      gradient: "from-blue-500 to-blue-700",
      label: "Acessar meu Site",
      icon: <Globe />,
      onClick: () => window.open(pageSite!, "_blank"),
    },
    {
      id: "whats-principal",
      show: !!phone[0]?.phoneOne,
      gradient: "from-green-500 to-green-700",
      label: "WhatsApp Principal",
      icon: <CustomIcon />,
      onClick: () =>
        window.open(
          `https://wa.me/55${phone[0].phoneOne}?text=${encodedMessage}`,
          "_blank"
        ),
    },
    {
      id: "whats-secundario",
      show: !!phone[0]?.phoneTwo,
      gradient: "from-green-500 to-green-700",
      label: "WhatsApp Secundário",
      icon: <CustomIcon />,
      onClick: () =>
        window.open(
          `https://wa.me/55${phone[0].phoneTwo}?text=${encodedMessage}`,
          "_blank"
        ),
    },
    {
      id: "instagram",
      show: !!instagram,
      gradient: "from-purple-500 to-purple-700",
      label: "Instagram",
      icon: <InstagramIcon />,
      onClick: () =>
        window.open(`https://instagram.com/${instagram}/`, "_blank"),
    },
    {
      id: "email",
      show: !!email,
      gradient: "from-blue-500 to-blue-700",
      label: "Enviar um Email",
      icon: <MailIcon />,
      onClick: () => window.open(`mailto:${email}`, "_blank"),
    },
  ];

  const publicos = [
    {
      titulo: "Brindes e Itens Promocional",
      icone: Gift,
    },
    {
      titulo: "Esportivo e Fitness",
      icone: Dumbbell,
    },
    {
      titulo: "Escolar",
      icone: GraduationCap,
    },
    {
      titulo: "Corporativo e Administrativo",
      icone: Building2,
    },
    {
      titulo: "Industrial e Contrução Civil",
      icone: HardHat,
    },
    {
      titulo: "Alimentação e Gastronomia",
      icone: UtensilsIcon,
    },
    {
      titulo: "Limpeza e Serviços Gerais",
      icone: Sparkle,
    },
    {
      titulo: "Transportadora",
      icone: Bus,
    },
    {
      titulo: "Posto",
      icone: Fuel,
    },
    {
      titulo: "Instituições Públicas",
      icone: Landmark,
    },
  ];

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-300 dark:bg-black p-3">
      <div className="max-w-xl w-full bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl p-6 flex flex-col items-center gap-4">
        <div className="relative w-full flex items-center justify-center mb-7">
          {/* Banner atrás da imagem */}
          <div className="absolute top-1/2 -translate-y-1/2 w-full h-64 bg-black rounded-xl z-0"></div>

          <div className="w-60 h-60 rounded-xs overflow-hidden z-10 p-7">
            <img
              src="/images/logo.png"
              alt="Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div>
          <h1 className="text-2xl font-bold text-center text-red-700 dark:text-white">
            {name}
          </h1>
          <p className="text-center text-sm text-neutral-600 dark:text-neutral-300">
            {description}
          </p>
        </div>

        <Separator />
        <DynamicButtons buttons={buttons} />
        <Separator />

        <div className="w-full grid md:grid-cols-2 gap-x-2 gap-y-1 text-sm ml-4 xs:grid-cols-1">
          {publicos.map((item, index) => (
            <Alert
              key={index}
              className="bg-red-700 text-white opacity-90 hover:opacity-100 active:opacity-100 flex items-center gap-2"
            >
              <item.icone className="w-4 h-4" />
              <AlertTitle>{item.titulo}</AlertTitle>
            </Alert>
          ))}
        </div>

        <Separator />

        <div className="flex flex-col gap-1 mt-4 font-bold text-muted-foreground text-center">
          <span>Dados da empresa</span>
          <span>Nome: Fhase2 uniformes ltda</span>
          <span>CNPJ: 55.307.842/000-82</span>
        </div>
      </div>
    </div>
  );
};
