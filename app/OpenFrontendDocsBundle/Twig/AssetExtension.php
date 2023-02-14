<?php

namespace OpenFrontendDocsBundle\Twig;

use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

class AssetExtension extends AbstractExtension
{
    public function __construct(private string $assetPath)
    {

    }

    public function getFunctions()
    {
        return [
            new TwigFunction('open_frontend_asset', [$this, 'pathForAsset'])
        ];
    }

    public function pathForAsset(string $asset): string
    {
        return '/' . $this->assetPath . '/' . $asset;
    }
}