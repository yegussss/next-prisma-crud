import { NextResponse } from "next/server";

export function GET(require, { params }) {
  return NextResponse.json("Obteniendo tarea " + params.id);
}
export function PUT(require, { params }) {
  return NextResponse.json("Actualizando tarea " + params.id);
}
export function DELETE(require, { params }) {
  return NextResponse.json("Eliminando tarea " + params.id);
}
