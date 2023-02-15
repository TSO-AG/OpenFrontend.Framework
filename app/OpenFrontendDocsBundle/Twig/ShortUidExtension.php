<?php

namespace OpenFrontendDocsBundle\Twig;

use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

class ShortUidExtension extends AbstractExtension
{
    private array $uids = [];

    public function getFunctions()
    {
        return [
            new TwigFunction('open_frontend_short_uid', [$this, 'getShortUid'])
        ];
    }

    public function getShortUid(): string
    {
        do {
            $uid = uniqid();
        } while (isset($this->uids[$uid]));

        $this->uids[$uid] = true;

        return $uid;
    }
}