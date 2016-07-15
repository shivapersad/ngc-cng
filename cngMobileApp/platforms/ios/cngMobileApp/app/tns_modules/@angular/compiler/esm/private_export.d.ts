import * as directive_normalizer from './src/directive_normalizer';
import * as lexer from './src/expression_parser/lexer';
import * as parser from './src/expression_parser/parser';
import * as html_parser from './src/html_parser';
import * as i18n_html_parser from './src/i18n/i18n_html_parser';
import * as i18n_message from './src/i18n/message';
import * as i18n_extractor from './src/i18n/message_extractor';
import * as xmb_serializer from './src/i18n/xmb_serializer';
import * as metadata_resolver from './src/metadata_resolver';
import * as path_util from './src/output/path_util';
import * as ts_emitter from './src/output/ts_emitter';
import * as parse_util from './src/parse_util';
import * as dom_element_schema_registry from './src/schema/dom_element_schema_registry';
import * as selector from './src/selector';
import * as style_compiler from './src/style_compiler';
import * as template_parser from './src/template_parser';
import * as view_compiler from './src/view_compiler/view_compiler';
export declare namespace __compiler_private__ {
    type SelectorMatcher = selector.SelectorMatcher;
    var SelectorMatcher: typeof selector.SelectorMatcher;
    type CssSelector = selector.CssSelector;
    var CssSelector: typeof selector.CssSelector;
    type AssetUrl = path_util.AssetUrl;
    var AssetUrl: typeof path_util.AssetUrl;
    type ImportGenerator = path_util.ImportGenerator;
    var ImportGenerator: typeof path_util.ImportGenerator;
    type CompileMetadataResolver = metadata_resolver.CompileMetadataResolver;
    var CompileMetadataResolver: typeof metadata_resolver.CompileMetadataResolver;
    type HtmlParser = html_parser.HtmlParser;
    var HtmlParser: typeof html_parser.HtmlParser;
    type I18nHtmlParser = i18n_html_parser.I18nHtmlParser;
    var I18nHtmlParser: typeof i18n_html_parser.I18nHtmlParser;
    type ExtractionResult = i18n_extractor.ExtractionResult;
    var ExtractionResult: typeof i18n_extractor.ExtractionResult;
    type Message = i18n_message.Message;
    var Message: typeof i18n_message.Message;
    type MessageExtractor = i18n_extractor.MessageExtractor;
    var MessageExtractor: typeof i18n_extractor.MessageExtractor;
    var removeDuplicates: typeof i18n_extractor.removeDuplicates;
    var serializeXmb: typeof xmb_serializer.serializeXmb;
    var deserializeXmb: typeof xmb_serializer.deserializeXmb;
    type DirectiveNormalizer = directive_normalizer.DirectiveNormalizer;
    var DirectiveNormalizer: typeof directive_normalizer.DirectiveNormalizer;
    type Lexer = lexer.Lexer;
    var Lexer: typeof lexer.Lexer;
    type Parser = parser.Parser;
    var Parser: typeof parser.Parser;
    type ParseLocation = parse_util.ParseLocation;
    var ParseLocation: typeof parse_util.ParseLocation;
    type ParseError = parse_util.ParseError;
    var ParseError: typeof parse_util.ParseError;
    type ParseErrorLevel = parse_util.ParseErrorLevel;
    var ParseErrorLevel: typeof parse_util.ParseErrorLevel;
    type ParseSourceFile = parse_util.ParseSourceFile;
    var ParseSourceFile: typeof parse_util.ParseSourceFile;
    type ParseSourceSpan = parse_util.ParseSourceSpan;
    var ParseSourceSpan: typeof parse_util.ParseSourceSpan;
    type TemplateParser = template_parser.TemplateParser;
    var TemplateParser: typeof template_parser.TemplateParser;
    type TemplateParseResult = template_parser.TemplateParseResult;
    type DomElementSchemaRegistry = dom_element_schema_registry.DomElementSchemaRegistry;
    var DomElementSchemaRegistry: typeof dom_element_schema_registry.DomElementSchemaRegistry;
    type StyleCompiler = style_compiler.StyleCompiler;
    var StyleCompiler: typeof style_compiler.StyleCompiler;
    type ViewCompiler = view_compiler.ViewCompiler;
    var ViewCompiler: typeof view_compiler.ViewCompiler;
    type TypeScriptEmitter = ts_emitter.TypeScriptEmitter;
    var TypeScriptEmitter: typeof ts_emitter.TypeScriptEmitter;
}
