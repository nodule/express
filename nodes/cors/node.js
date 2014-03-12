output = [input.app, 'use', cors({
  origin: input.origin || true,
  methods: input.methods || undefined,
  allowedHeaders: input.allowedHeaders || undefined,
  exposedHeaders: input.exposedHeaders || undefined,
  credentials: input.credentials || undefined,
  maxAge: input.maxAge || undefined
})]
