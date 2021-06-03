const users = [
  { email: "mohamed@instabug.com", password: "12345678" },
  { email: "mohamed1@instabug.com", password: "12345678" },
  { email: "mohamed2@instabug.com", password: "12345678" },
  { email: "mohamed3@instabug.com", password: "12345678" },
  { email: "mohamed4@instabug.com", password: "12345678" },
  { email: "mohamed5@instabug.com", password: "12345678" },
  { email: "mohamed6@instabug.com", password: "12345678" },
  { email: "mohamed7@instabug.com", password: "12345678" },
];
export const signIn = ({ email, password }) => {
  let found = users.find((user) => user.email === email);
  if (found) {
    if (found.password === password) {
      return { user: found, error: null };
    } else {
      return { error: "Password is Incorrect", passwordError: true };
    }
  } else {
    return { error: "Email Not Found", emailError: true };
  }
};
export const signOut = () => null;
