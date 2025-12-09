import users from "../data/users.json";

const fetchUsers = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(users);
    }, 1500); // 1.5 seconds of delay
  });
};

const validUsers = {
  "john@email.com": "john123",
  "jane@email.com": "jane123",
};

export async function login(email, password) {
  if (!validUsers[email] || validUsers[email] !== password) {
    return {
      success: false,
      error: "Incorrect email or password",
    };
  }

  const users = await fetchUsers();
  const user = users.find((u) => u.email === email);

  if (user) {
    const token = btoa(`${email}:${Date.now()}`);
    const userWithLoginDate = { ...user, loginDate: new Date().toISOString() };
    localStorage.setItem("authToken", token);
    localStorage.setItem("userData", JSON.stringify(userWithLoginDate));
    return { success: true, user: userWithLoginDate };
  }
  return { success: false, error: "User not found" };
}

export function logout() {
  localStorage.removeItem("authToken");
  localStorage.removeItem("userData");
}

export function getCurrentUser() {
  const userData = localStorage.getItem("userData");
  return userData ? JSON.parse(userData) : null;
}

export function isAuthenticated() {
  const token = localStorage.getItem("authToken");
  return token !== null;
}
