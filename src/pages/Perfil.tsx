import { useState } from "react";
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

export default function UserProfile() {
      const navigate = useNavigate();
  const [isEditingPassword, setIsEditingPassword] = useState(false);
  const [userName] = useState("María González");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePasswordSave = () => {
    // Here you would handle password update logic
    if (newPassword === confirmPassword && newPassword.length >= 6) {
      // Update password logic would go here
      setIsEditingPassword(false);
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
      alert("Contraseña actualizada correctamente");
    } else {
      alert("Las contraseñas no coinciden o son muy cortas");
    }
  };

  const handlePasswordCancel = () => {
    setIsEditingPassword(false);
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
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
                  {userName}
                </p>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">
                  Email
                </label>
                <p className="text-sm text-foreground mt-1">
                  maria.gonzalez@email.com
                </p>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">
                  Miembro desde
                </label>
                <p className="text-sm text-foreground mt-1">Enero 2024</p>
              </div>
            </CardContent>
          </Card>

          {/* Password Edit Card */}
          <Card
            className="lg:col-span-2 animate-slide-up border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300"
            style={{ animationDelay: "0.1s" }}
          >
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Lock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <CardTitle>Seguridad</CardTitle>
                  <CardDescription>
                    Gestiona tu contraseña de acceso
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {!isEditingPassword ? (
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">
                      Contraseña
                    </label>
                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex-1 h-10 bg-muted rounded-md flex items-center px-3">
                        <span className="text-muted-foreground">
                          ••••••••••••
                        </span>
                      </div>
                      <Button
                        onClick={() => setIsEditingPassword(true)}
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-2"
                      >
                        <Edit3 className="w-4 h-4" />
                        Editar
                      </Button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">
                      Contraseña Actual
                    </label>
                    <Input
                      type="password"
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      placeholder="Ingresa tu contraseña actual"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">
                      Nueva Contraseña
                    </label>
                    <Input
                      type="password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="Ingresa tu nueva contraseña"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">
                      Confirmar Nueva Contraseña
                    </label>
                    <Input
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Confirma tu nueva contraseña"
                      className="mt-1"
                    />
                  </div>
                  <div className="flex gap-3 pt-2">
                    <Button
                      onClick={handlePasswordSave}
                      className="flex items-center gap-2"
                    >
                      <Save className="w-4 h-4" />
                      Guardar
                    </Button>
                    <Button
                      onClick={handlePasswordCancel}
                      variant="outline"
                      className="flex items-center gap-2"
                    >
                      <X className="w-4 h-4" />
                      Cancelar
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
            <CardContent>
              {!isEditingPassword ? (
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">
                      Numero
                    </label>
                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex-1 h-10 bg-muted rounded-md flex items-center px-3">
                        <span className="text-muted-foreground">
                          6537-7893
                        </span>
                      </div>
                      <Button
                        onClick={() => setIsEditingPassword(true)}
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-2"
                      >
                        <Edit3 className="w-4 h-4" />
                        Editar
                      </Button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">
                      Numero Actual
                    </label>
                    <Input
                      type="password"
                      value={currentPassword}
                      onChange={(e) => setCurrentPassword(e.target.value)}
                      placeholder="Ingresa tu contraseña actual"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">
                      Nuevo Numero
                    </label>
                    <Input
                      type="password"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      placeholder="Ingresa tu nueva contraseña"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">
                      Confirmar Nueva Cambio
                    </label>
                    <Input
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Confirma tu nueva contraseña"
                      className="mt-1"
                    />
                  </div>
                  <div className="flex gap-3 pt-2">
                    <Button
                      onClick={handlePasswordSave}
                      className="flex items-center gap-2"
                    >
                      <Save className="w-4 h-4" />
                      Guardar
                    </Button>
                    <Button
                      onClick={handlePasswordCancel}
                      variant="outline"
                      className="flex items-center gap-2"
                    >
                      <X className="w-4 h-4" />
                      Cancelar
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
            
          </Card>
        </div>

        {/* Purchase History Card */}
        <Card
          className="animate-slide-up border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300"
          style={{ animationDelay: "0.2s" }}
        >
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <ShoppingBag className="w-5 h-5 text-primary" />
              </div>
              <div>
                <CardTitle>Historial de Compras</CardTitle>
                <CardDescription>
                  Aquí aparecerán tus compras realizadas
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="border-2 border-dashed border-muted-foreground/20 rounded-lg p-8 md:p-12 text-center">
              <ShoppingBag className="w-12 h-12 text-muted-foreground/40 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-muted-foreground mb-2">
                No hay compras registradas
              </h3>
              <p className="text-sm text-muted-foreground/70 max-w-md mx-auto">
                Cuando realices tu primera compra, aparecerá aquí junto con
                todos los detalles y el historial de tus transacciones.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
      </Layout>
  );
}
