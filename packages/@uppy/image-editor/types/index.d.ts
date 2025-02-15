import type { PluginOptions, UIPlugin, PluginTarget, UppyFile } from '@uppy/core'
import type Cropper from 'cropperjs'
import ImageEditorLocale from './generatedLocale'

type Actions = {
  revert: boolean
  rotate: boolean
  granularRotate: boolean
  flip: boolean
  zoomIn: boolean
  zoomOut: boolean
  cropSquare: boolean
  cropWidescreen: boolean
  cropWidescreenVertical: boolean
}

interface UppyCropperOptions extends Cropper.Options {
  croppedCanvasOptions: Cropper.GetCroppedCanvasOptions
}

export interface ImageEditorOptions extends PluginOptions {
  cropperOptions?: UppyCropperOptions
  actions?: Actions
  quality?: number
  target?: PluginTarget
  locale?: ImageEditorLocale
}

declare class ImageEditor extends UIPlugin<ImageEditorOptions> {}

export default ImageEditor

// Events

export type FileEditorStartCallback<TMeta> = (file: UppyFile<TMeta>) => void;
export type FileEditorCompleteCallback<TMeta> = (updatedFile: UppyFile<TMeta>) => void;
export type FileEditorCancelCallback<TMeta> = (file: UppyFile<TMeta>) => void;

declare module '@uppy/core' {
  export interface UppyEventMap<TMeta> {
    'file-editor:start' : FileEditorStartCallback<TMeta>
    'file-editor:complete': FileEditorCompleteCallback<TMeta>
    'file-editor:cancel': FileEditorCancelCallback<TMeta>
  }
}
