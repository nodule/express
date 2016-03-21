output = [$.app, 'use', cors({
  origin: $.origin || true,
  methods: $.methods || undefined,
  allowedHeaders: $.allowedHeaders || undefined,
  exposedHeaders: $.exposedHeaders || undefined,
  credentials: $.credentials || undefined,
  maxAge: $.maxAge || undefined
})]
