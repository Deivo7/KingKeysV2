import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Layout } from "../components/Layout";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import logo from "../Imagenes/Logo-Inicio.png"; 
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";
import { Eye, EyeOff, ArrowLeft, Mail, Lock, User, Phone } from "lucide-react";
import axios from "axios";
import { toast } from "react-toastify";
import { useCart } from "@/contexts/CartContext";

interface LoginFormData {
  email: string;
  password: string;
}

interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface FormErrors {
  [key: string]: string;
}

export default function Login() {
  const { fetchCart } = useCart(); 
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("login");

  

  // Login form state
  const [loginData, setLoginData] = useState<LoginFormData>({
    email: "",
    password: "",
  });
  const [loginErrors, setLoginErrors] = useState<FormErrors>({});

  // Register form state
  const [registerData, setRegisterData] = useState<RegisterFormData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [registerErrors, setRegisterErrors] = useState<FormErrors>({});

  const validateLoginForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!loginData.email) {
      newErrors.email = "Email es requerido";
    } else if (!/\S+@\S+\.\S+/.test(loginData.email)) {
      newErrors.email = "Email no es válido";
    }

    if (!loginData.password) {
      newErrors.password = "Contraseña es requerida";
    } else if (loginData.password.length < 6) {
      newErrors.password = "Contraseña debe tener al menos 6 caracteres";
    }

    setLoginErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateRegisterForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!registerData.email) {
      newErrors.email = "Email es requerido";
    } else if (!/\S+@\S+\.\S+/.test(registerData.email)) {
      newErrors.email = "Email no es válido";
    }

    if (!registerData.password) {
      newErrors.password = "Contraseña es requerida";
    } else if (registerData.password.length < 6) {
      newErrors.password = "Contraseña debe tener al menos 6 caracteres";
    }

    if (!registerData.confirmPassword) {
      newErrors.confirmPassword = "Confirmar contraseña es requerido";
    } else if (registerData.password !== registerData.confirmPassword) {
      newErrors.confirmPassword = "Las contraseñas no coinciden";
    }

    setRegisterErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  ///HANDLE LOGIN SUBMIT!!!!!!!!!!!!!
    const handleLoginSubmit = async (e: React.FormEvent) => {
      e.preventDefault();

      if (!validateLoginForm()) return;

      setIsLoading(true);
      try {
        const response = await axios.post(backendUrl + '/api/auth/login', {
          email: loginData.email,
          password: loginData.password,
        });
        console.log("Respuesta del login:", response.data); // ✅ Verifica que el backend responde

        if (response.data.success) {
          localStorage.setItem("token", response.data.token);
          console.log("Token almacenado:", response.data.token);
          toast.success("¡Inicio de sesión exitoso!");
          await syncroCard();
          await fetchCart();
          navigate("/");
        } else {
          toast.error(response.data.error?.message || "Credenciales incorrectas");
        }
      } catch (error: any) {
        if (axios.isAxiosError(error)) {
          if (error.response?.status === 401) {
            toast.error("Usuario o contraseña incorrectos");
          } else {
            toast.error(error.response?.data?.error?.message || "Error en el servidor");
          }
        } else {
          toast.error("Error inesperado, intenta más tarde");
        }
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    
    const syncroCard = async () => {
      const token = localStorage.getItem("token");
      const localCartRaw = JSON.parse(localStorage.getItem("cartItems") || "[]");
      // Solo enviamos lo que el backend necesita: id + quantity
      const localCart = localCartRaw.map((item: any) => ({
        id: item.id,
        quantity: item.quantity,
      }));
      console.log("Enviando carrito a backend:", localCart);
      if (!token || localCart.length === 0) return;

      try {
        await axios.post(backendUrl + '/api/cart/sync', { localCart }, {
          headers: { token },
        });
        localStorage.removeItem("cartItems");
      } catch (error) {
        console.error("Error al fusionar carrito local con el backend:", error);
      }
    };

    ////HANDLE REGISTER SUBMITTTTT
    const handleRegisterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateRegisterForm()) return;

    setIsLoading(true);
    try {
      const response = await axios.post(backendUrl+'/api/auth/register', {
        name: registerData.name,
        email: registerData.email,
        password: registerData.password,
      });
      console.log("Respuesta del registro:", response.data); // ✅ Te dice si se registró bien

      if (response.data.success) {
        toast.success("¡Registro exitoso! Ahora puedes iniciar sesión.");
        setActiveTab("login");
      } else {
        toast.error(response.data.error?.message || "Error al registrar");
      }
    } catch (error: any) {
      console.error(error);
      toast.error(error.response?.data?.error?.message || "Error en el servidor");
    } finally {
      setIsLoading(false);
    }
  };


  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log("Token actual en localStorage:", token);
  }, []);

  const handleLoginInputChange = (
    field: keyof LoginFormData,
    value: string,
  ) => {
    setLoginData((prev) => ({ ...prev, [field]: value }));
    if (loginErrors[field]) {
      setLoginErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const handleRegisterInputChange = (
    field: keyof RegisterFormData,
    value: string,
  ) => {
    setRegisterData((prev) => ({ ...prev, [field]: value }));
    if (registerErrors[field]) {
      setRegisterErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-40 py-10">
        <div className="max-w-md mx-auto px-4">
          <Button variant="ghost"onClick={() => navigate(-1)} className="mb-6 text-[#006D5B] hover:text-[#005248]">
            <ArrowLeft className="w-4 h-4 mr-2" /> Volver
          </Button>

          <Card className="shadow-lg">
            <CardHeader className="text-center">
               <img src={logo} alt="Logo" className="h-[61px] w-[618px] object-contain"/>
              <p className="text-gray-600">
                Tu tienda de divisas gaming de confianza
              </p>
            </CardHeader>
            <CardContent>
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="login">Iniciar Sesión</TabsTrigger>
                  <TabsTrigger value="register">Registrarse</TabsTrigger>
                </TabsList>

                {/* Login Tab */}
                <TabsContent value="login">
                  <form onSubmit={handleLoginSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="login-email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input id="login-email" type="email" value={loginData.email} onChange={(e) => handleLoginInputChange("email", e.target.value)}
                          className={`pl-10 ${loginErrors.email ? "border-red-500" : ""}`} placeholder="tu@email.com"
                        />
                      </div> {loginErrors.email && ( <p className="text-red-500 text-sm mt-1">{loginErrors.email} </p>)}
                    </div>
                    <div>
                      <Label htmlFor="login-password">Contraseña</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="login-password"
                          type={showPassword ? "text" : "password"}
                          value={loginData.password}
                          onChange={(e) =>
                            handleLoginInputChange("password", e.target.value)
                          }
                          className={`pl-10 pr-10 ${loginErrors.password ? "border-red-500" : ""}`}
                          placeholder="Tu contraseña"
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-1 top-1 h-8 w-8 p-0"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                      {loginErrors.password && (
                        <p className="text-red-500 text-sm mt-1">
                          {loginErrors.password}
                        </p>
                      )}
                    </div>

                    <div className="text-right">
                      <Button
                        type="button"
                        variant="link"
                        className="text-[#006D5B] hover:text-[#005248] p-0 h-auto"
                        onClick={() =>
                          alert(
                            "Funcionalidad de recuperación de contraseña próximamente",
                          )
                        }
                      >
                        ¿Olvidaste tu contraseña?
                      </Button>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-[#006D5B] hover:bg-[#005248] py-2.5"
                      disabled={isLoading}
                    >
                      {isLoading ? "Iniciando sesión..." : "Iniciar Sesión"}
                    </Button>

                    <div className="text-center text-sm text-gray-600">
                      ¿No tienes cuenta?{" "}
                      <Button
                        type="button"
                        variant="link"
                        className="text-[#006D5B] hover:text-[#005248] p-0 h-auto"
                        onClick={() => setActiveTab("register")}
                      >
                        Regístrate aquí
                      </Button>
                    </div>
                  </form>
                </TabsContent>

                {/* Register Tab */}
                <TabsContent value="register">
                  <form onSubmit={handleRegisterSubmit} className="space-y-4">
                    
                      <div>
                        <Label htmlFor="register-name">Nombre de Usuario</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input
                            id="register-name"
                            value={registerData.name}
                            onChange={(e) =>
                              handleRegisterInputChange(
                                "name",
                                e.target.value,
                              )
                            }
                            className={`pl-10 ${registerErrors.name ? "border-red-500" : ""}`}
                            placeholder="Juan"
                          />
                        </div>
                        {registerErrors.name && (
                          <p className="text-red-500 text-sm mt-1">
                            {registerErrors.name}
                          </p>
                        )}
                      </div>
                    
                    <div>
                      <Label htmlFor="register-email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="register-email"
                          type="email"
                          value={registerData.email}
                          onChange={(e) =>
                            handleRegisterInputChange("email", e.target.value)
                          }
                          className={`pl-10 ${registerErrors.email ? "border-red-500" : ""}`}
                          placeholder="tu@email.com"
                        />
                      </div>
                      {registerErrors.email && (
                        <p className="text-red-500 text-sm mt-1">
                          {registerErrors.email}
                        </p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="register-password">Contraseña</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="register-password"
                          type={showPassword ? "text" : "password"}
                          value={registerData.password}
                          onChange={(e) =>
                            handleRegisterInputChange(
                              "password",
                              e.target.value,
                            )
                          }
                          className={`pl-10 pr-10 ${registerErrors.password ? "border-red-500" : ""}`}
                          placeholder="Mínimo 6 caracteres"
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-1 top-1 h-8 w-8 p-0"
                          onClick={() => setShowPassword(!showPassword)}
                        >
                          {showPassword ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                      {registerErrors.password && (
                        <p className="text-red-500 text-sm mt-1">
                          {registerErrors.password}
                        </p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="register-confirmPassword">
                        Confirmar Contraseña
                      </Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                          id="register-confirmPassword"
                          type={showConfirmPassword ? "text" : "password"}
                          value={registerData.confirmPassword}
                          onChange={(e) =>
                            handleRegisterInputChange(
                              "confirmPassword",
                              e.target.value,
                            )
                          }
                          className={`pl-10 pr-10 ${registerErrors.confirmPassword ? "border-red-500" : ""}`}
                          placeholder="Confirma tu contraseña"
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="absolute right-1 top-1 h-8 w-8 p-0"
                          onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                          }
                        >
                          {showConfirmPassword ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                      {registerErrors.confirmPassword && (
                        <p className="text-red-500 text-sm mt-1">
                          {registerErrors.confirmPassword}
                        </p>
                      )}
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-[#006D5B] hover:bg-[#005248] py-2.5"
                      disabled={isLoading}
                    >
                      {isLoading ? "Creando cuenta..." : "Crear Cuenta"}
                    </Button>

                    <div className="text-center text-sm text-gray-600">
                      ¿Ya tienes cuenta?{" "}
                      <Button
                        type="button"
                        variant="link"
                        className="text-[#006D5B] hover:text-[#005248] p-0 h-auto"
                        onClick={() => setActiveTab("login")}
                      >
                        Inicia sesión aquí
                      </Button>
                    </div>
                  </form>
                </TabsContent>
              </Tabs>

              {/* Social Login Options */}
              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">
                      O continúa con
                    </span>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() =>
                      alert("Inicio de sesión con Google próximamente")
                    }
                    className="w-full"
                  >
                    <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="currentColor"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                    Google
                  </Button>

                  <Button
                    type="button"
                    variant="outline"
                    onClick={() =>
                      alert("Inicio de sesión con Facebook próximamente")
                    }
                    className="w-full"
                  >
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                    Facebook
                  </Button>
                </div>
              </div>
              <div className="mt-6 text-center text-xs text-gray-500">
            Al crear una cuenta, aceptas nuestros{" "}
            <Button
              variant="link"
              className="text-[#006D5B] hover:text-[#005248] p-0 h-auto text-xs"
              onClick={() => navigate("/support/politica-reembolso")}
            >
              Términos y Condiciones
            </Button>{" "}
            y{" "}
            <Button
              variant="link"
              className="text-[#006D5B] hover:text-[#005248] p-0 h-auto text-xs"
              onClick={() => alert("Política de privacidad próximamente")}
            >
              Política de Privacidad
            </Button>
          </div>
            </CardContent>
          </Card>

          
        </div>
      </div>
    </Layout>
  );
}
