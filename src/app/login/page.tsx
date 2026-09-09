"use client";

import { FormEvent, useEffect, useState } from "react";
import { LockKeyhole, Mail, UserPlus, LogIn } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";

type Customer = {
  name: string;
  email: string;
};

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const redirectTo = searchParams.get("redirect") || "/#products";

  const [mode, setMode] = useState<"login" | "register">("login");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const existingCustomer = localStorage.getItem("libertyCustomer");

    if (existingCustomer) {
      router.replace(redirectTo);
    }
  }, [redirectTo, router]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setError("");
    setMessage("");

    if (!email || !password) {
      setError("Please enter your email and password.");
      return;
    }

    if (mode === "register" && !name) {
      setError("Please enter your full name.");
      return;
    }

    /*
     * Prototype customer authentication.
     *
     * This stores the customer locally so you can test the
     * ordering flow. For production, replace this with
     * Supabase, Firebase, Auth.js or your own secure backend.
     */

    if (mode === "register") {
      const customer = {
        name,
        email: email.toLowerCase().trim(),
        password,
      };

      localStorage.setItem(
        "libertyCustomerAccount",
        JSON.stringify(customer)
      );

      localStorage.setItem(
        "libertyCustomer",
        JSON.stringify({
          name,
          email: email.toLowerCase().trim(),
        })
      );

      setMessage("Account created successfully.");

      setTimeout(() => {
        router.push(redirectTo);
      }, 500);

      return;
    }

    const savedAccount = localStorage.getItem(
      "libertyCustomerAccount"
    );

    if (!savedAccount) {
      setError(
        "No customer account was found. Please create an account first."
      );
      return;
    }

    const account = JSON.parse(savedAccount);

    if (
      account.email !== email.toLowerCase().trim() ||
      account.password !== password
    ) {
      setError("Incorrect email or password.");
      return;
    }

    const customer: Customer = {
      name: account.name,
      email: account.email,
    };

    localStorage.setItem(
      "libertyCustomer",
      JSON.stringify(customer)
    );

    setMessage("Login successful.");

    setTimeout(() => {
      router.push(redirectTo);
    }, 500);
  };

  return (
    <main className="min-h-screen bg-paper flex items-center justify-center px-6 py-16">
      <div className="w-full max-w-md">

        <div className="text-center mb-10">
          <a
            href="/"
            className="font-display text-3xl text-olive-deep"
          >
            Liberty Health
          </a>

          <p className="mt-3 text-sm text-ink/60">
            Customer ordering portal
          </p>
        </div>

        <div className="bg-limestone border border-[var(--line)] p-7 md:p-9">

          <div className="flex border-b border-[var(--line)] mb-8">

            <button
              type="button"
              onClick={() => {
                setMode("login");
                setError("");
                setMessage("");
              }}
              className={`flex-1 pb-4 text-sm font-medium ${
                mode === "login"
                  ? "text-olive-deep border-b-2 border-olive-deep"
                  : "text-ink/50"
              }`}
            >
              <span className="inline-flex items-center gap-2">
                <LogIn size={17} />
                Login
              </span>
            </button>

            <button
              type="button"
              onClick={() => {
                setMode("register");
                setError("");
                setMessage("");
              }}
              className={`flex-1 pb-4 text-sm font-medium ${
                mode === "register"
                  ? "text-olive-deep border-b-2 border-olive-deep"
                  : "text-ink/50"
              }`}
            >
              <span className="inline-flex items-center gap-2">
                <UserPlus size={17} />
                Create Account
              </span>
            </button>

          </div>

          <div className="mb-7">
            <h1 className="font-display text-2xl md:text-3xl text-olive-deep">
              {mode === "login"
                ? "Welcome back"
                : "Create your account"}
            </h1>

            <p className="mt-2 text-sm text-ink/65 leading-relaxed">
              {mode === "login"
                ? "Log in to continue ordering Liberty Health olive oil."
                : "Create an account so you can order our olive oil online."}
            </p>
          </div>

          {error && (
            <div className="mb-5 border border-red-300 bg-red-50 text-red-800 px-4 py-3 text-sm">
              {error}
            </div>
          )}

          {message && (
            <div className="mb-5 border border-green-300 bg-green-50 text-green-800 px-4 py-3 text-sm">
              {message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">

            {mode === "register" && (
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-olive-deep mb-2"
                >
                  Full name
                </label>

                <div className="relative">
                  <UserPlus
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-olive-mid"
                  />

                  <input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(event) =>
                      setName(event.target.value)
                    }
                    placeholder="Your full name"
                    className="w-full border border-[var(--line)] bg-paper pl-11 pr-4 py-3 outline-none focus:border-olive-deep"
                  />
                </div>
              </div>
            )}

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-olive-deep mb-2"
              >
                Email address
              </label>

              <div className="relative">
                <Mail
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-olive-mid"
                />

                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(event) =>
                    setEmail(event.target.value)
                  }
                  placeholder="you@example.com"
                  className="w-full border border-[var(--line)] bg-paper pl-11 pr-4 py-3 outline-none focus:border-olive-deep"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-olive-deep mb-2"
              >
                Password
              </label>

              <div className="relative">
                <LockKeyhole
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-olive-mid"
                />

                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(event) =>
                    setPassword(event.target.value)
                  }
                  placeholder="Enter your password"
                  className="w-full border border-[var(--line)] bg-paper pl-11 pr-4 py-3 outline-none focus:border-olive-deep"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-olive-deep text-white py-4 font-medium hover:opacity-90 transition"
            >
              {mode === "login"
                ? "Login & Continue Shopping"
                : "Create Account & Continue"}
            </button>

          </form>

          <div className="mt-7 pt-6 border-t border-[var(--line)] text-center">
            <a
              href="/"
              className="text-sm text-olive-mid hover:text-olive-deep"
            >
              ← Back to Liberty Health
            </a>
          </div>

        </div>

        <p className="mt-6 text-center text-xs text-ink/45">
          Your account is used to manage your olive oil orders.
        </p>

      </div>
    </main>
  );
}