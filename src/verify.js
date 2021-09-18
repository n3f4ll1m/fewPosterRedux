export default function verify(history, isLogedIn) {
  if (!isLogedIn) {
    history.push("/login");
  }
}
