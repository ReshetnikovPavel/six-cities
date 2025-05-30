export const Component = {
  RestApplication: Symbol.for('Application'),
  Logger: Symbol.for('Logger'),
  Config: Symbol.for('Config'),
  CommentRepository: Symbol.for('CommentRepository'),
  OfferRepository: Symbol.for('OfferRepository'),
  UserRepository: Symbol.for('UserRepository'),
  OfferService: Symbol.for('OfferService'),
  CommentService: Symbol.for('CommentService'),
  UserService: Symbol.for('UserService'),
  OfferController: Symbol.for('OfferController'),
  UserController: Symbol.for('UserController'),
  ExceptionFilter: Symbol.for('ExceptionFilter'),
} as const;
