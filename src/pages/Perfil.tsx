import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Layout } from "../components/Layout";
import { User, Lock, ShoppingBag, Edit3, Save, X } from "lucide-react";
import { ShopContext } from "@/data/ShopContext";
import OrderGrid from "@/components/OrderGrid";


export default function UserProfile() {
  const { profile, getUserProfile } = useContext(ShopContext);
  
  useEffect(() => {
    if (!profile) {
      getUserProfile();
    }
  }, []);

  return (
     <Layout>
          
    <div className="min-h-screen bg-background p-4 md:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Mi Perfil
          </h1>
          <p className="text-muted-foreground">
            Gestiona tu información personal y configuración de cuenta
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {/* User Info Card */}
          <Card className="lg:col-span-1 animate-slide-up border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300">
            <CardHeader className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-10 h-10 text-primary" />
              </div>
              <CardTitle className="text-xl">Información Personal</CardTitle>
              <CardDescription>Tu información básica</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium text-muted-foreground">
                  Nombre
                </label>
                <p className="text-lg font-semibold text-foreground mt-1">
                  {profile?.name}
                </p>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">
                  Email
                </label>
                <p className="text-sm text-foreground mt-1">
                  {profile?.email}
                </p>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">
                  Miembro desde
                </label>
                <p className="text-sm text-foreground mt-1">
                  {new Date(profile?.createdat || "").toLocaleDateString("es-ES", {
                    year: "numeric",
                    month: "long",
                    day: "numeric"
                  })}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        {/* Purchase History Card */}
        <Card
          className="animate-slide-up border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300"
          style={{ animationDelay: "0.2s" }}
        >
          <CardHeader>
            <OrderGrid/>
          </CardHeader>
          <CardContent>
            
          </CardContent>
        </Card>
      </div>
    </div>
      </Layout>
  );
}
