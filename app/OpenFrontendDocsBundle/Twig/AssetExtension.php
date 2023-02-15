<?php

namespace OpenFrontendDocsBundle\Twig;

use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

class AssetExtension extends AbstractExtension
{
    private array $manifest = [];

    public function __construct(private string $manifestJsonPath)
    {
        if (!file_exists($this->manifestJsonPath)) {
            throw new \RuntimeException('Must build the OpenFrontend assets first!');
        }

        $manifest = json_decode(file_get_contents($this->manifestJsonPath), true);

        if (!\is_array($manifest)) {
            throw new \RuntimeException('Invalid manifest.json content!');
        }

        $this->manifest = $manifest;
    }

    public function getFunctions()
    {
        return [
            new TwigFunction('open_frontend_asset', [$this, 'pathForAsset'])
        ];
    }

    public function pathForAsset(string $asset): string
    {
        if (!array_key_exists($asset, $this->manifest)) {
            throw new \RuntimeException(sprintf('The asset "%s" is unknown.', $asset));
        }

        return $this->manifest[$asset];
    }
}