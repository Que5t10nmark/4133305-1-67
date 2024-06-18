export function GET(request, { params }) {
  return Response.json({
    name: "Anucha",
    major: "IT",
    lv: "3",
    id: params.id,
  });
}
