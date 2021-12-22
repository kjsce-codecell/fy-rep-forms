export interface FormDataType {
  email: string;
  name: string;
  phone: string;
  year: number;
  branch: "COMPS" | "IT" | "Electronics" | "EXTC" | "MECH";
  positions:
    | "Technical Team"
    | "Public Relations Team"
    | "Creative Team"
    | "Coordinator";
  resume: string;
  cover: string;
  codechef: string;
  github: string;
  linkedin: string;
  q1: string;
}
