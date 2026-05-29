const BASE_URL = import.meta.env.VITE_API_BASE_URL ?? "http://localhost:4000/api";

async function request(path, options = {}) {
  const response = await fetch(`${BASE_URL}${path}`, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });

  const body = await response.text();
  let data = null;
  if (body) {
    try {
      data = JSON.parse(body);
    } catch {
      data = null;
    }
  }

  if (!response.ok) {
    throw new Error((data && data.message) || `Booking API request failed with status ${response.status}`);
  }

  return data;
}

export async function bookService(payload) {
  return request("/bookings", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export async function fetchBookings() {
  return request("/bookings");
}
