
import { useState } from "react";
import {
  Lock,
  Eye,
  EyeOff,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

export default function ChangePassword() {
  const [form, setForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const [message, setMessage] = useState({
    type: "",
    text: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    setMessage({ type: "", text: "" });
  };

  const togglePassword = (field) => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const validateForm = () => {
    if (!form.currentPassword || !form.newPassword || !form.confirmPassword) {
      return "Please fill in all password fields.";
    }

    if (form.newPassword.length < 8) {
      return "New password must contain at least 8 characters.";
    }

    if (form.newPassword === form.currentPassword) {
      return "New password must be different from your current password.";
    }

    if (form.newPassword !== form.confirmPassword) {
      return "New password and confirm password do not match.";
    }

    return null;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const error = validateForm();

    if (error) {
      setMessage({
        type: "error",
        text: error,
      });
      return;
    }

    // Connect your change-password API here.
    setLoading(true);

    try {
      // Example:
      // await api.put("/users/me/password", {
      //   currentPassword: form.currentPassword,
      //   newPassword: form.newPassword,
      // });

      setMessage({
        type: "success",
        text: "Password validation successful. Connect the API to update your password.",
      });

      setForm({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
      });
    } catch (error) {
      setMessage({
        type: "error",
        text: error?.response?.data?.message || "Unable to update password. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full rounded-lg border border-slate-200 bg-white px-4 py-3 pr-12 text-[13px] text-slate-700 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-[#ff385c] focus:ring-4 focus:ring-[#ff385c]/10";

  const passwordFields = [
    {
      name: "currentPassword",
      label: "Current Password",
      placeholder: "Enter your current password",
      key: "current",
    },
    {
      name: "newPassword",
      label: "New Password",
      placeholder: "Enter your new password",
      key: "new",
    },
    {
      name: "confirmPassword",
      label: "Confirm New Password",
      placeholder: "Confirm your new password",
      key: "confirm",
    },
  ];

  return (
    <div className="mx-auto w-full max-w-[1100px]">
      {/* Page Heading */}
      <div className="mb-6">
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <span>Dashboard</span>
          <span>/</span>
          <span className="text-[#ff385c]">Change Password</span>
        </div>

        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-800">
          Change Password
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Update your account password to keep your account secure.
        </p>
      </div>

      {/* Password Card */}
      <div className="overflow-hidden rounded-xl border border-slate-200/80 bg-white shadow-[0_4px_24px_rgba(15,23,42,0.035)]">
        {/* Card Header */}
        <div className="flex items-center gap-3 border-b border-slate-100 px-5 py-5 sm:px-8">
          <div className="grid h-10 w-10 place-items-center rounded-lg bg-rose-50 text-[#ff385c]">
            <Lock size={19} />
          </div>

          <div>
            <h2 className="text-[15px] font-semibold text-slate-800">
              Password Settings
            </h2>
            <p className="mt-0.5 text-xs text-slate-500">
              Manage your account password.
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="px-5 py-7 sm:px-8 sm:py-8">
          <form onSubmit={handleSubmit} className="max-w-full">
            <div className="space-y-5">
              {passwordFields.map((field) => (
                <div key={field.name}>
                  <label
                    htmlFor={field.name}
                    className="mb-2 block text-[13px] font-medium text-slate-700"
                  >
                    {field.label}
                    <span className="ml-1 text-[#ff385c]">*</span>
                  </label>

                  <div className="relative">
                    <input
                      id={field.name}
                      name={field.name}
                      type={showPassword[field.key] ? "text" : "password"}
                      value={form[field.name]}
                      onChange={handleChange}
                      placeholder={field.placeholder}
                      autoComplete={
                        field.name === "currentPassword"
                          ? "current-password"
                          : "new-password"
                      }
                      className={inputClass}
                      required
                    />

                    <button
                      type="button"
                      onClick={() => togglePassword(field.key)}
                      aria-label={
                        showPassword[field.key]
                          ? "Hide password"
                          : "Show password"
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1.5 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
                    >
                      {showPassword[field.key] ? (
                        <EyeOff size={17} />
                      ) : (
                        <Eye size={17} />
                      )}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Password Hint */}
            <div className="mt-5 flex items-start gap-3 rounded-lg border border-blue-100 bg-blue-50/70 p-4">
              <ShieldCheck
                size={18}
                className="mt-0.5 shrink-0 text-blue-600"
              />
              <div>
                <p className="text-xs font-semibold text-blue-800">
                  Password Security
                </p>
                <p className="mt-1 text-xs leading-5 text-blue-700/80">
                  Use at least 8 characters. For better security, combine
                  uppercase and lowercase letters, numbers and special
                  characters.
                </p>
              </div>
            </div>

            {/* Feedback */}
            {message.text && (
              <div
                role="status"
                className={`mt-5 flex items-start gap-2 rounded-lg border p-3 text-xs ${
                  message.type === "success"
                    ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                    : "border-rose-200 bg-rose-50 text-rose-700"
                }`}
              >
                {message.type === "success" ? (
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
                ) : (
                  <AlertCircle size={16} className="mt-0.5 shrink-0" />
                )}
                <p>{message.text}</p>
              </div>
            )}

            {/* Submit */}
            <div className="mt-7 flex flex-col gap-3 border-t border-slate-100 pt-6 sm:flex-row sm:items-center">
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center rounded-lg bg-[#ff385c] px-7 py-3 text-[13px] font-semibold text-white shadow-sm shadow-rose-200 transition hover:bg-[#ed294e] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Updating..." : "Save Changes"}
              </button>

              <button
                type="button"
                onClick={() => {
                  setForm({
                    currentPassword: "",
                    newPassword: "",
                    confirmPassword: "",
                  });
                  setMessage({ type: "", text: "" });
                }}
                className="rounded-lg border border-slate-200 px-7 py-3 text-[13px] font-medium text-slate-600 transition hover:bg-slate-50"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
